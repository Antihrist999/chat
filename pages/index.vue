<template>
  <!-- Основная часть страницы -->
  <div id="apps" class="container">
    <div class="py-5 text-center">
      <h2>Чат программа</h2>
      <p class="lead">Укажите ваше имя и начинайте переписку</p>
    </div>
    <div class="row">
      <div class="col-6">
        <!-- Форма для получения сообщений и имени -->
        <h3>Форма сообщений</h3>
        <form id="messForm">
          <label for="name">Имя</label>
          <input
            type="text"
            name="EnterName"
            id="EnterName"
            placeholder="Введите имя"
            class="form-control"
          />
          <br />
          <label for="message">Сообщение</label>
          <textarea
            name="message"
            id="message"
            class="form-control"
            placeholder="Введите сообщение"
          ></textarea>
          <br />
          <input @click="sendMess" value="Отправить" class="btn btn-danger" />
        </form>
      </div>
      <div class="col-6">
        <h3>Сообщения</h3>
        <!-- Вывод всех сообщений будет здесь -->
        <ul>
          <li v-for="message in messages" :key="messages.index">
            {{ message.index }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return { messages: [] };
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      name: "main", // Use socket "home"
      // socket.io-client opts:
      reconnection: false,
    });
  },

  methods: {
    sendMess() {
      console.log("1" + this.messages);

      this.socket.emit("sendMess", {
        mess: message.value,
        name: EnterName.value,
      });
      this.messages.push(EnterName.value + ": " + message.value);

      this.socket.on("add mess", function (data) {
        console.log(data);
      });
    },
  },
};
</script>
