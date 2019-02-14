<template>
  <div>
    <div class="wrapper">
      <h1>vue-readmore-readless</h1>
      <readmore
        :content="content"
        :height="150"
        readMore="Read More"
        readLess="Less"
      ></readmore>
      <readmore
        :content="content"
        :height="150"
        readMoreText="Go Deeper"
        readMoreIcon="play_arrow"
        showWordCount
      ></readmore>

      <div class="markdown-body" style="margin-top: 100px;">
        <h2 id="installation">Installation</h2>
        <pre><code class="language-bash">$ npm install vue-readmore-readless
</code></pre>
        <p>
          <strong
            >Install Google Material Design fonts in
            <code>/public/index.html</code></strong
          >
        </p>
        <pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://fonts.googleapis.com/css?family=Material+Icons&quot;/&gt;
</code></pre>
        <p>
          <strong
            >Install <code>vue-readmore-readless</code> in
            <code>/src/main.js</code>:</strong
          >
        </p>
        <pre><code>import Readmore from &quot;vue-readmore-readless&quot;;
Vue.use(Readmore);
</code></pre>
        <h2 id="usage-examples">Usage examples:</h2>
        <pre><code>&lt;readmore
      :content=&quot;content&quot;
      :height=&quot;150&quot;
      readMore=&quot;Read More&quot;
      readLess=&quot;Less&quot;
    &gt;&lt;/readmore&gt;
</code></pre>
        <pre><code>    &lt;readmore
      :content=&quot;content&quot;
      :height=&quot;150&quot;
      readMoreText=&quot;Go Deeper&quot;
      readMoreIcon=&quot;play_arrow&quot;
      showWordCount
    &gt;&lt;/readmore&gt;
</code></pre>
        <h2 id="options">Options:</h2>
        <p>More here...</p>
        <h2 id="demo">Demo</h2>
        <p>
          <a href="https://readmore-readless.netlify.com/"
            >https://readmore-readless.netlify.com/</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Readmore from "@/components/Readmore.vue";
export default {
  components: {
    // Readmore
  },
  data() {
    return {
      shortContent: `<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        placerat egestas sapien,sit amet varius dolor tincidunt sed. Proin
        pulvinar dolor  <a href="/about">About Page as router-link</a> in augue semper rhoncus vel in tortor. Nam vulputate
        malesuada felis, a aliquet nunc facilisis sed. Mauris congue justo et
        erat ultricies, id dapibus magna cursus. Duis posuere efficitur
        consequat. Suspendisse tristique id eros id finibus. Cras vitae
        efficitur nunc, ut cursus ex. Nulla dapibus ut orci non porttitor. Duis
        luctus eros tempor ipsum bibendum faucibus. Vestibulum iaculis tortor
        nibh, non dapibus purus suscipit eu. Curabitur ullamcorper diam eu dolor
        commodo, a feugiat eros lobortis. Quisque nunc nulla, accumsan quis
        nulla a, placerat vestibulum ex. Etiam tincidunt lacus vitae elementum
        vestibulum. Fusce ac pulvinar massa.
      </p>
      `,
      content: `
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        placerat egestas sapien,sit amet varius dolor tincidunt sed. Proin
        pulvinar dolor  <a href="/about">About Page as router-link</a> in augue semper rhoncus vel in tortor. Nam vulputate
        malesuada felis, a aliquet nunc facilisis sed. Mauris congue justo et
        erat ultricies, id dapibus magna cursus. Duis posuere efficitur
        consequat. Suspendisse tristique id eros id finibus. Cras vitae
        efficitur nunc, ut cursus ex. Nulla dapibus ut orci non porttitor. Duis
        luctus eros tempor ipsum bibendum faucibus. Vestibulum iaculis tortor
        nibh, non dapibus purus suscipit eu. Curabitur ullamcorper diam eu dolor
        commodo, a feugiat eros lobortis. Quisque nunc nulla, accumsan quis
        nulla a, placerat vestibulum ex. Etiam tincidunt lacus vitae elementum
        vestibulum. Fusce ac pulvinar massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        placerat egestas sapien, sit amet varius dolor tincidunt sed. Proin
        pulvinar dolor in augue semper rhoncus vel in tortor. Nam vulputate
        malesuada felis, a aliquet nunc facilisis sed. Mauris congue justo et
        erat ultricies, id dapibus magna cursus. Duis posuere efficitur
        consequat. Suspendisse tristique id eros id finibus. Cras vitae
        efficitur nunc, ut cursus ex. Nulla dapibus ut orci non porttitor. Duis
        luctus eros tempor ipsum bibendum faucibus. Vestibulum iaculis tortor
        nibh, non dapibus purus suscipit eu. Curabitur ullamcorper diam eu dolor
        commodo, a feugiat eros lobortis. Quisque nunc nulla, accumsan quis
        nulla a, placerat vestibulum ex. Etiam tincidunt lacus vitae elementum
        vestibulum. Fusce ac pulvinar massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        placerat egestas sapien, sit amet varius dolor tincidunt sed. Proin
        pulvinar dolor in augue semper rhoncus vel in tortor. Nam vulputate
        malesuada felis, a aliquet nunc facilisis sed. Mauris congue justo et
        erat ultricies, id dapibus magna cursus. Duis posuere efficitur
        consequat. Suspendisse tristique id eros id finibus. Cras vitae
        efficitur nunc, ut cursus ex. Nulla dapibus ut orci non porttitor. Duis
        luctus eros tempor ipsum bibendum faucibus. Vestibulum iaculis tortor
        nibh, non dapibus purus suscipit eu. Curabitur ullamcorper diam eu dolor
        commodo, a feugiat eros lobortis. Quisque nunc nulla, accumsan quis
        nulla a, placerat vestibulum ex. Etiam tincidunt lacus vitae elementum
        vestibulum. Fusce ac pulvinar massa.
      </p>`
    };
  }
};
</script>

<style>
/* .testClass .readMore.btn .wordCount {
  font-weight: 400;
  color: blue;
} */

h1,
h2,
h3 {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 900;
  font-style: normal;
  text-align: center;
}

h1 {
  font-size: 60px;
}

.wrapper {
  padding-left: 50px;
  padding-right: 50px;
}
</style>
