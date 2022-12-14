<template>
  <div class="format">
    <div v-for="per in miembros" :key="per" class="person">
      <v-card>
        <v-img
          height="200px"
          :src="per.src"
          gradient="to top right, rgba(120, 120, 120,.33), rgba(60, 60, 60,.7)"
        >
                  <v-card-title class="white--text mt-8">
            <v-avatar size="120">
              <img
                alt="user"
                :src="require(`../assets/${per.imgsrc}.jpg`)"
              />
            </v-avatar>
            <p class="name">{{per.name}}</p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in per.messages"
              :key="message"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.tittle }}</strong>
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      miembros: [
        {
          name: 'Bárbara Segura',
          imgsrc: 'barbara',
          src: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2Fdataimagejpegbase649j4QBsRXhpZgAASUkqAAgAAAADADEBA-1ffd7d873a73148434eea221fbb605cb.jpg',
          messages: [
            {
              tittle: 'Description',
              message:
            'Pikachu ipsum dolor sit amet culpa pikachu nulla slowpoke magmar clefairy mewtwo officia anim fearow scyther charmeleon.' +
            'Eevee golbat electrode gloom electabuzz golduck aerodactyl, qui magna caterpie enim starmie charmander.',
              color: 'orange darken-1'
            },
            {
              tittle: 'Hobbies',
              message: 'Moltres',
              color: 'orange darken-1'
            },
            {
              tittle: 'Social',
              message: 'Twitter, Facebook, Instagram, TikTok, ...',
              color: 'orange darken-1'
            }
          ]
        },
        {
          name: 'Alejandro Cruz',
          imgsrc: 'alex2',
          src: 'https://64.media.tumblr.com/a24af16e0c48198c06a10aa1a26b9037/8e3a6ad7eb3f1fbb-ac/s2048x3072/5aba5b1e81f5938859fbda70c8b65cb88ce8b32c.jpg',
          messages: [
            {
              tittle: 'Description',
              message:
              'Slowbro est sint vulpix, weepinbell ut culpa labore chansey horsea sint nostrud kadabra.' +
            'Spearow golbat slowpoke in moltres charmander ea sint parasect. Articuno excepteur nisi krabby enim voluptate.',
              color: 'orange darken-1'
            },
            {
              tittle: 'Hobbies',
              message: 'Ralts',
              color: 'orange darken-1'
            },
            {
              tittle: 'Social',
              message: 'holiwi',
              color: 'orange darken-1'
            }
          ]
        },
        {
          name: 'Iratze Loro',
          imgsrc: 'iratze',
          src: 'https://img.wattpad.com/face9eb0f05419a862d7d657faac723240902461/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f53633373554f5a5f3071695458773d3d2d3836353839353234382e313630353839393130373436653131363538383533373137343430322e706e67?s=fit&w=720&h=720',
          messages: [
            {
              tittle: 'Description',
              message:
            'Tentacool persian tentacruel dragonair. Gloom exercitation kabutops, articuno zapdos et oddish deserunt ivysaur dolore nisi rattata.' +
            'Machoke kadabra slowpoke in mollit ekans ullamco. Jolteon tauros shellder bulbasaur.',
              color: 'orange darken-1'
            },
            {
              tittle: 'Hobbies',
              message: 'Jirachi',
              color: 'orange darken-1'
            },
            {
              tittle: 'Social',
              message: 'Twitter, Facebook, Instagram, TikTok, ...',
              color: 'orange darken-1'
            }
          ]
        },
        {
          name: 'Esteban Ojeda',
          imgsrc: 'teby',
          src: 'https://images5.alphacoders.com/104/1043840.png',
          messages: [
            {
              tittle: 'Description',
              message:
            'Rhyhorn ut ut laboris. Aliquip bellsprout tentacruel magna, ea butterfree pariatur meowth sunt golem excepteur proident ut est.' +
            'Pidgeot metapod ut kadabra, squirtle aliqua est.',
              color: 'orange darken-1'
            },
            {
              tittle: 'Hobbies',
              message: 'Charmander',
              color: 'orange darken-1'
            },
            {
              tittle: 'Social',
              message: 'Twitter, Facebook, Instagram, TikTok, ...',
              color: 'orange darken-1'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-size: 30px;
  margin-left: 25px;
}
.format{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.person{
  margin: 10px;
}
</style>
