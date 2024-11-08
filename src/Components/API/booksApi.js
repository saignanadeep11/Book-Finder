export const books = async (bookTitle) => {
  return await fetch(`https://openlibrary.org/search.json?title=${bookTitle}`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const bookCover = async (coverId) => {
  return await fetch(`https://covers.openlibrary.org/b/isbn/${coverId}-M.jpg`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
