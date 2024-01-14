import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'vitest';
import { generateTags } from '../src';

describe('Generate documents', () => {
  test('Pet Store', async () => {
    const tags = await generateTags(
      fileURLToPath(new URL('./fixtures/petstore.yaml', import.meta.url)),
    );

    await Promise.all(
      tags.map(async (tag) =>
        expect(tag.content).toMatchFileSnapshot(
          `./out/petstore/${tag.tag}.mdx`,
        ),
      ),
    );
  });

  test('Pet Store', async () => {
    const tags = await generateTags(
      fileURLToPath(new URL('./fixtures/museum.yaml', import.meta.url)),
    );

    await Promise.all(
      tags.map(async (tag) =>
        expect(tag.content).toMatchFileSnapshot(`./out/museum/${tag.tag}.mdx`),
      ),
    );
  });
});