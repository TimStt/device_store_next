export const getBufferBySrc = async (src: string) => {
  return await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
};
