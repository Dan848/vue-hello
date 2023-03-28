const { createApp } = Vue

createApp({
  data() {
    return {
      title: "Giradischi 90% Sfocato",
      //Ho messo le classi in una variabile così, per provare
      title_class: "text-center text-white mt-4 mb-3",
      img_src: "https://fastly.picsum.photos/id/39/1000/500.jpg?hmac=JAkfmhVO7VwoRcW9ETeYWBPiaVgOfxYLlPZoQQpy9-U"
    }
  }
}).mount('#app')