export const state = () => ({})

export const actions = {
  SOCKET_res(ctx, data) {
    console.log('Message received', data)
  }
}
