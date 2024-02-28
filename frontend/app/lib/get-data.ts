export const revalidate = 86400; // revalidate every 24 h

async function getData(URL: string) {
  const res = await fetch(URL, {
    next: { revalidate: revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getData;
