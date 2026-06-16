// Converts KHR_materials_unlit materials in burg4.glb to standard PBR
// so iOS Quick Look's USDZ converter doesn't silently drop them.
// The baseColorTexture is already in pbrMetallicRoughness — we just remove the unlit flag.

const GLTF = 'C:/Users/Administrator/AppData/Local/npm-cache/_npx/a6797f7ff67bb1f2/node_modules/@gltf-transform';
const { NodeIO } = require(`${GLTF}/core/dist/index.cjs`);
const { ALL_EXTENSIONS } = require(`${GLTF}/extensions/dist/index.cjs`);

async function main() {
    const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
    const doc = await io.read('models/burg4.glb');

    // Step 1 — remove KHR_materials_unlit from each material
    let converted = 0;
    for (const material of doc.getRoot().listMaterials()) {
        const unlit = material.getExtension('KHR_materials_unlit');
        if (unlit) {
            material.setExtension('KHR_materials_unlit', null);
            material.setRoughnessFactor(0.9);
            material.setMetallicFactor(0.0);
            converted++;
            console.log(`  Converted material: "${material.getName()}"`);
        }
    }

    if (converted === 0) {
        console.log('No unlit materials found — nothing to convert.');
        process.exit(1);
    }

    // Step 2 — dispose the document-root extension object so it leaves extensionsUsed
    for (const ext of doc.getRoot().listExtensionsUsed()) {
        if (ext.extensionName === 'KHR_materials_unlit') {
            ext.dispose();
            console.log('  Removed KHR_materials_unlit from document extensionsUsed');
        }
    }

    await io.write('models/burger-v2-raw.glb', doc);
    console.log(`Done: ${converted} material(s) converted → models/burger-v2-raw.glb`);
}

main().catch(e => { console.error(e); process.exit(1); });
