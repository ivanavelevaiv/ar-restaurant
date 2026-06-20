// Recentres prvo-final.glb so X/Z are at 0 and the mesh base sits at Y=0.
// 'below' pivot: bottom of bounding box → Y=0, so the dish rests on the AR floor.

const GLTF = 'C:/Users/Administrator/AppData/Local/npm-cache/_npx/a6797f7ff67bb1f2/node_modules/@gltf-transform';
const { NodeIO }      = require(`${GLTF}/core/dist/index.cjs`);
const { ALL_EXTENSIONS } = require(`${GLTF}/extensions/dist/index.cjs`);
const { center }      = require(`${GLTF}/functions/dist/index.cjs`);

async function main() {
    const io  = new NodeIO().registerExtensions(ALL_EXTENSIONS);
    const doc = await io.read('models/prvo-final.glb');

    await doc.transform(center({ pivot: 'below' }));

    // Report new bounding box
    const root   = doc.getRoot();
    let minY = Infinity, maxY = -Infinity, minX = Infinity, maxX = -Infinity;
    for (const mesh of root.listMeshes()) {
        for (const prim of mesh.listPrimitives()) {
            const pos = prim.getAttribute('POSITION');
            if (!pos) continue;
            for (let i = 0; i < pos.getCount(); i++) {
                const [x, y] = pos.getElement(i, []);
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    console.log(`New bbox Y: ${minY.toFixed(4)} → ${maxY.toFixed(4)}`);
    console.log(`New bbox X: ${minX.toFixed(4)} → ${maxX.toFixed(4)}`);

    await io.write('models/prvo-final.glb', doc);
    console.log('Done → models/prvo-final.glb');
}

main().catch(e => { console.error(e); process.exit(1); });
