import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'

async function build() {
    const bundle = await rollup({
        input: 'src/xpw.js',
        plugins: [nodeResolve()]
    })
    await bundle.write({
        dir: 'dist',
        format: 'esm',
    })
}

await build()
