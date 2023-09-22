import path from 'path';

const results = await Bun.build({
  // entrypoints: ['./src/ui.tsx'],
  root: './src'
});

for (const result of results.outputs) {
  // Can be consumed as blobs
  console.log(await result);
  console.log(`Writing ${result.kind} ${result.path}`);
  // Can be written manually, but you should use `outdir` in this case.
  Bun.write(path.join('dist', result.path), result);
}
