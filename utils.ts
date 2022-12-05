export async function readInput(fileName: string): Promise<string> {
  let text = "";
  // const __dirname = new URL(".", import.meta.url).pathname;

  try {
    text = await Deno.readTextFile(`${fileName}`);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error("the file was not found");
    } else {
      // otherwise re-throw
      throw error;
    }
  }

  return text;
}
