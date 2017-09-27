import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cards',
    templateUrl: 'cards.html',
})
export class CardsPage {

    cards = [
        {
            imgPath: "california.jpg",
            title: "California Dreamin'",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "boboliGardens.jpg",
            title: "Boboli Gardens, Italy",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "bighornWyoming.jpg",
            title: "Bighorn National Forest, Wyoming",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "borabora.jpg",
            title: "Bora Bora Beach Paradise",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "greece.jpg",
            title: "Greece",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "paris.jpg",
            title: "Eiffel Tower",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "riverFergusIreland.jpg",
            title: "Fergus River Ireland",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "southKorea.jpg",
            title: "South Korea",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "valleyoftheConiglenScotland.jpg",
            title: "Coniglen Valley Scotland",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "venice.jpg",
            title: "Venice Italy",
            desc: "Morbi feugiat lacinia lectus. Nunc molestie interdum sapien, vel viverra est tempus ac. Nullam id feugiat risus. Proin id faucibus nulla, quis hendrerit eros.",
            favorited: false,
            shared: false
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CardsPage');
    }

    clickFav(card) {
        let index = this.cards.indexOf(card);
        if (index > -1) {
            if (card.favorited) {
                this.cards[index].favorited = false;
            } else {
                this.cards[index].favorited = true;
            }
        }
    }

    clickShare(card) {
        let index = this.cards.indexOf(card);
        if (index > -1) {
            if (card.shared) {
                this.cards[index].shared = false;
            } else {
                this.cards[index].shared = true;
            }
        }
    }

    deleteCards(card) {
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    }
}


