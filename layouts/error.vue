<template>
  <main>
    <section>
      <div>
        <h2>お探しのページが見つかりませんでした。</h2>
        <p>
          申し訳ありません。お探しのページが見つかりませんでした。<br />
          {{ count }}秒後にトップページに戻ります。
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "ご指定のページが見つかりませんでした。"
    }
  },
  data() {
    return {
      count: 5
    }
  },
  watch: {
    count: function() {
      if (this.count > 0) {
        this.countDown()
      } else {
        this.$router.push("/")
      }
    }
  },
  mounted: function() {
    this.countDown()
  },
  destroyed: function() {
    clearTimeout
  },
  methods: {
    countDown() {
      const app = this
      setTimeout(function() {
        app.count--
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;

  h2,
  p {
    text-align: center;
  }
}
</style>
