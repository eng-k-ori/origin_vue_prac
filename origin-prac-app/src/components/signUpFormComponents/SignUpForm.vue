
<template>
  <form @submit.prevent="handleRegister">
    <label>ユーザー名</label>
    <!-- 1 -->
    <input :value="props.userName" @input="updateUserName" type="text" id="userName" required />
    <br />
    <label>パスワード</label>
    <input :value="props.password" @input="updatePassword" type="password" id="password" required/>
    <br />
    <button type="submit">登録</button>
    <br />
    <button type="button" @click="handleClear">クリア</button>
  </form>

</template>

<script setup lang="ts">

// 2 この書き方では単にプロパティの名前を文字列で指定しているだけで、型指定していない。
interface signUpFormProps{
  userName: string,
  password: string
}

interface signUpFormEmits{
  (e: 'clear'):void;
  (e: 'register'):void;
  // update:userNameイベントはstring型の引数を取る
  (e: 'update:userName', value: string):void;
  // update: という接頭辞は、親コンポーネントで双方向データバインディングを行う際によく使われる。
  (e: 'update:password', value: string): void;
}

// ↓const props = defineProps(['userName','password'])
const props = defineProps<signUpFormProps>();

// ↓const emit = defineEmits(['clear','register', 'update:userName', 'update:password'])
const emit = defineEmits<signUpFormEmits>()

function updateUserName(e:Event) {
  const emitValue = e.target as HTMLInputElement;
  emit('update:userName', emitValue.value)
  console.log('updateUserNameが発火')
}

function updatePassword(e: Event) {
  const emitValue = e.target as HTMLInputElement;
  emit('update:password', emitValue.value);
  console.log('updatePasswordが発火')
}

function handleRegister(){
  emit('register')
  console.log('子のhandleRegisterが発火')
}

function handleClear(){
  emit("clear")
  console.log('子のhandleClearが発火')
}

</script>
<style scoped>
form {background-color: limegreen;}

</style>

<!-- /*
*/ -->

<!-- /*
@          @@          @@          @@          @@          @@          @@          @@          @
1
結局面倒なので、v-bindとupdateのemitで実装

Vue.jsでは、props は親コンポーネントから渡される読み取り専用のデータとして扱う必要があり、子コンポーネント内で直
接変更してはいけない。
v-model などの双方向データバインディングを実現する場合には、イベントを通じて親コンポーネントに変更を通知する必要が
ある。
------------------------------------------------------------------------------------------------
詳細な説明
props の性質
Vue.jsのコンポーネントにおいて、props は親コンポーネントから子コンポーネントにデータを渡すために使用される。しか
し、props は子コンポーネントで読み取り専用 (readonly) として扱われるため、子コンポーネント内で直接props の値を
変更することはできない。
これが設計上のルールであり、props を変更しようとすると
Unexpected mutation of "userName" prop.eslintvue/no-mutating-props
というエラーが発生する。
------------------------------------------------------------------------------------------------
v-model の実装と emit の役割
v-model を使うと、親コンポーネントと子コンポーネントの間でデータの双方向バインディングを簡単に実装できる。しかし、
子コンポーネントが v-model で受け取った props を直接変更するのではなく、変更を親コンポーネントに通知するためにイ
ベント (emit) を使って更新の意図を伝える必要がある。

################################################################################################
2
const props = defineProps(['userName','password'])
defineProps(['userName', 'password']) では、userName と password というプロパティが必須であることを宣言
していますが、型の指定はしていません。
これにより、Vueはそれらのプロパティを正しく認識しますが、具体的にどの型の値が渡されるかは特に明示されていません。

記事：
https://zenn.dev/comm_vue_nuxt/articles/7ad7338080482f

*/ -->