import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import midjourney from './midjourney';
import chat from './chat';
import chatdoc from './chatdoc';
import qrart from './qrart';
import luma from './luma';
import suno from './suno';
import root from './common';
import persistChat from './chat/persist';
import persistMidjourney from './midjourney/persist';
import persistChatdoc from './chatdoc/persist';
import persistQrart from './qrart/persist';
import persistLuma from './luma/persist';
import persistSuno from './suno/persist';
import persistRoot from './common/persist';

const store = createStore({
  ...root,
  modules: {
    midjourney: midjourney,
    chat: chat,
    qrart: qrart,
    luma: luma,
    suno: suno,
    chatdoc: chatdoc
  },
  plugins: [
    createPersistedState({
      paths: [
        ...persistRoot,
        ...persistChat,
        ...persistMidjourney,
        ...persistChatdoc,
        ...persistQrart,
        ...persistLuma,
        ...persistSuno
      ]
    })
  ]
});

export default store;
