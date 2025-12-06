window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "f85afa5033d641c3964b39b2f17bd6f1",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-peach.vercel.app/token.html",
      },
      "https://oauth-master-class-peach.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
    document.getElementById("button2").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "f85afa5033d641c3964b39b2f17bd6f1",
        response_type: "token",
        redirect_uri: "https://oauth.yandex.ru/verification_code",
      },
      "https://oauth-master-class-peach.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
};
