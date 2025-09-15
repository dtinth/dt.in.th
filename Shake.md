---
title: Detecting device shake in JavaScript
public: true
---

# Detecting device shake in [JavaScript](JavaScript)

In [the 7th Stupid Hackathon in Thailand](https://stupid.hackathon.in.th/7/), during pitching, we wanted the audience to vote for their favorite projects by shaking their phone. For that, a **shake detection algorithm** was needed.

The voting web application was built by [@boomchanotai](https://github.com/boomchanotai), while I just contributed the shake detection algorithm. You can [read my write-up about the experience and see the video demo of the application used in the hackathon here (Thai language)](https://web.facebook.com/dtinth/posts/pfbid02g6Nn4rtn7X51F24ve55b62ceMyxvrHCryUYf6swJZfPYmRvmrMZuZeq2Ydj8LAApl).

For the demo to work, you need to open this page on a mobile device and allow the page to access the device motion sensor.

<p align="center">
  <button @click="grant" class="btn">Grant device motion permission</button><br>
  {{accelText}}
</p>

<div style="border-radius: 1em; border: 2px solid #656463; padding: 1em; background: #252423; text-align: center; margin: 2em 0;">
  Shake counter
  <div style="font-size: 4em; margin: 1rem 0;">
    {{shakes}}
  </div>
  Median shake speed for the last 10 shakes: {{speed}} shakes/sec
</div>

## The shake detection algorithm

:::figure{.framed}
![Three-panel diagram explaining a device shake detection algorithm on a black background. First, a shake is started when the acceleration exceeds 30 m/s^2. We remember acceleration vector as the activation vector a0. Formula: ||a|| > 30. First way to stopping a shake: A shake is stopped when the acceleration goes under 20 m/s^2. Formula: ||a|| < 20. Second way to stop a shake: A shake is also stopped when the angle between the latest acceleration and the activation vector exceeds ~72° (cos^-1(0.3)). Formula: (a · a0) / (||a|| ||a0||) < 0.3.](https://im.dt.in.th/ipfs/bafybeiabakreyptymivgrm43tsklqeos6hxwfk7qr2velbo26dztpy2xeu/image.webp)
:::

<script>
  export default {
    setup() {
      const grant = async () => {
        try {
          DeviceMotionEvent.requestPermission()
        } catch (e) {
          console.error(e)
        }
      }
      const accel = Vue.ref({ x: 0, y: 0, z: 0 })
      const shakes = Vue.ref(0)
      const speed = Vue.ref('-')
      let speeds = []
      let lastShake
      const accelText = Vue.computed(() => {
        const { x, y, z } = accel.value
        return `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}, z: ${z.toFixed(2)}`
      })
      let shaking
      const normalize = (x, y, z) => {
        const len = Math.hypot(x, y, z);
        return [x / len, y / len, z / len];
      }
      const median = (arr) => {
        const mid = Math.floor(arr.length / 2);
        const nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      }
      const onDeviceMotion = (e) => {
        const latest = {
          x: e.accelerationIncludingGravity.x,
          y: e.accelerationIncludingGravity.y,
          z: e.accelerationIncludingGravity.z,
        }
        accel.value = latest
        const hypot = Math.hypot(latest.x, latest.y, latest.z)
        if (hypot > 30) {
          if (shaking) {
            const [a, b, c] = normalize(latest.x, latest.y, latest.z);
            const [d, e, f] = normalize(shaking.x, shaking.y, shaking.z);
            if (Math.abs(a * d + b * e + c * f) < 0.3) {
              shaking = undefined;
            }
          }
          if (!shaking) {
            shaking = latest
            recordShake()
          }
        } else if (hypot < 20) {
          shaking = undefined;
        }
      }
      const recordShake = () => {
        shakes.value += 1
        if (lastShake) {
          const time = performance.now() - lastShake
          const latestSpeed = 1000 / time
          speeds.push(latestSpeed)
          if (speeds.length > 10) {
            speeds.shift()
          }
          if (speeds.length >= 5) {
            speed.value = median(speeds).toFixed(2)
          }
        }
        lastShake = performance.now()
      }
      if (typeof window !== 'undefined') Object.assign(window, { recordShake })
      Vue.onMounted(() => {
        window.addEventListener('devicemotion', onDeviceMotion)
      })
      Vue.onUnmounted(() => {
        window.removeEventListener('devicemotion', onDeviceMotion)
      })
      return { grant, accelText, shakes, speed }
    }
  }
</script>
