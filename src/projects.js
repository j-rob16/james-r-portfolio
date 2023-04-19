import { 
  gamegroupproject,
  nasagroupproject
} from '../src/assets';

const projects = [
  {
    description: {
      english: 'Built over the course of 14 days as a team of 4. We emulated a j-rpg style battle system with characters that we had created. A backend built using Java allowed the player to gain experience, find new weapons and attempt to battle the final boss!',
      japanese: '4人のチームで14日間かけて制作しました。自分たちで作ったキャラクターを使って、J-RPGスタイルのバトルシステムをエミュレートしました。Javaで作られたバックエンドで、プレイヤーは経験を積み、新しい武器を見つけ、最後のボスとの戦いに挑むことができます。'
    },
    font: {
      english: 'font-playfair',
      japanese: 'font-serifjp',
    },
    image: gamegroupproject,
    title: {
      english: 'Game Group Project',
      japanese: 'ゲーム・グループ・プロジェクト'
    },
    tags: [{
      name: 'react',
      color: "blue-text-gradient",
    }],
    source_code_link: "https://github.com/"
  },
  {
    description: {
      english: 'A group project built over 7 days. We built this educational application to teach young teenagers about the solar system and all its planets. The application utilises API data fron Nasa to show the user real images of the solar system along with accurate data & charts.',
      japanese: '7日間かけて作られたグループプロジェクト。私たちは、若いティーンエイジャーに太陽系とその惑星について教えるために、この教育用アプリケーションを作りました。このアプリケーションは、NasaのAPIデータを利用して、正確なデータとチャートとともに太陽系の実画像をユーザーに見せています。'
    },
    font: {
      english: 'font-playfair',
      japanese: 'font-serifjp',
    },
    image: nasagroupproject,
    title: {
      english: 'NASA Group Project',
      japanese: 'NASA・グループ・プロジェクト'
    },
    tags: [{
      name: 'react',
      color: "blue-text-gradient",
    }],
    source_code_link: "https://github.com/"
  }
];

export default projects;