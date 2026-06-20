// Scales prvo-final.glb from millimetres to metres (× 0.001).
// Wraps all scene root nodes in a scale node, then the caller runs
// `flatten` to bake the scale into vertex positions.

const GLTF = 'C:/Users/Administrator/AppData/Local/npm-cache/_npx/a6797f7ff67bb1f2/node_modules/@gltf-transform';
const { NodeIO }         = require(`${GLTF}/core/dist/index.cjs`);
const { ALL_EXTENSIONS } = require(`${GLTF}/extensions/dist/index.cjs`);

async function main() {
    const io  = new NodeIO().registerExtensions(ALL_EXTENSIONS);
    const doc = await io.read('models/prvo-final.glb');

    const scene    = doc.getRoot().listScenes()[0];
    const children = [...scene.listChildren()];

    const scaleNode = doc.createNode('mm_to_m').setScale([0.001, 0.001, 0.001]);
    children.forEach(child => scaleNode.addChild(child));
    scene.addChild(scaleNode);

    await io.write('models/prvo-scaled.glb', doc);
    console.log(`Wrapped ${children.length} root node(s) in 0.001 scale → models/prvo-scaled.glb`);
}

main().catch(e => { console.error(e); process.exit(1); });
