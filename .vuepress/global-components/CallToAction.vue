<template>
  <p class="cta">
    <a :href="href" class="link" target="_blank">
      <strong>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8B8685"
            d="M14.446 7.833l-6.743 6.476-1.698-1.916L9.643 9.19H.983V6.377h8.66L6.005 3.175 7.703 1.26l6.743 6.476z"
            fill-rule="evenodd"
          />
        </svg>
        {{ ' ' }}
        <span class="title">
          <slot />
        </span>
      </strong>
      <span class="url">{{ href }}</span>
    </a>
  </p>
</template>

<script>
export default {
  props: ['href'],
}
</script>

<style scoped lang="stylus">
.cta > .link {
  display: block;
  text-decoration: none;
  color: #8b8685;
  background: #252423;
  border: 1px solid #666;
  border-radius: 10px;
  box-shadow: 0 0 1px #090807 inset, 0 -10px 20px rgba(9, 8, 7, 0.2) inset, 0 2px 15px rgba(69, 68, 67, 0.7) inset, 0 3px 4px rgba(9, 8, 7, 0.4);
  -moz-transition: 0.1s background;
  -webkit-transition: 0.1s background;
  transition: 0.1s background;
  padding: 16px;

  &:hover {
    background: #353433;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: #aaa;
  }

  & > strong {
    display: block;
    position: relative;
    color: #ffb;
    font-size: 1.5rem;

    &::before {
      color: #8b8685;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &:hover > strong {
    color: #fff;
  }

  & > .url {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    padding-left: 1.25rem;
    margin-bottom: 0.25rem;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>
