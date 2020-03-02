<template>
    <div id="app">
        <p id="error" v-show="error">
            {{ error }}
        </p>
        <label>
            <p>
                クリックで画像を変更できます。
            </p>
            <img :src="avatar" alt="Avatar" class="image">
            <div>
                <input
                    type="file"
                    id="avatar_name"
                    accept="image/jpeg, image/png"
                    @change="onImageChange"
                    />
            </div>
        </label>
        <button @click="upload()">
            アップロード
        </button>
        <p>
            {{ message }}
        </p>
    </div>
</template>

<script>
// new Vue({
//     el: "#app",
//     name: 'ImageUploder',
//     data () {
//         return {
//         avatar: '',
//         message: '',
//         error: ''
//         }
//     },
//     methods: {
//         setError (error, text) {
//             this.error = (error.response && error.response.data && error.response.data.error) || text
//         },
//         getBase64 (file) {
//             return new Promise((resolve, reject) => {
//                 const reader = new FileReader()
//                 reader.readAsDataURL(file)
//                 reader.onload = () => resolve(reader.result)
//                 reader.onerror = error => reject(error)
//             })
//         },
//         onImageChange (e) {
//             const images = e.target.files || e.dataTransfer.files
//             this.getBase64(images[0])
//                 .then(image => this.avatar = image)
//                 .catch(error => this.setError(error, '画像のアップロードに失敗しました。'))
//         },
//         upload () {
//             if (this.avatar) {
//             /* postで画像を送る処理をここに書く */
//             this.message = 'アップロードしました' 
//             this.error = ''
//             } else {
//                 this.error = '画像がありません'
//             }
//         }
//     }
// })
</script>

<style>
label > input {
  display: none;
}

label {
  padding: 0 1rem;
  border: solid 1px #888;
} 

label::after {
  content: '+';
  font-size: 1rem;
  color: #888;
  padding-left: 1rem;
}
</style>