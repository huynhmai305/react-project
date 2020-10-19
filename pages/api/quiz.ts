export const getSession = async () => {
  const data = await fetch(`https://opentdb.com/api_token.php?command=request`);
  if (data) {
    return data.json();
  }
  return console.error("Fetching session token failed");
};

export const getQuiz = async (categoryId: number, sessionToken: string) => {
  const data = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${categoryId}&encode=base64&token=${sessionToken}`
  );
  if (data) {
    return data.json();
  }
  return console.error("Fetching the quiz failed");
};
