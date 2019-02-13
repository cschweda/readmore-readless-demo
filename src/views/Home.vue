<template>
  <div>
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
</style>
