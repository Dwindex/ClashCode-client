const images = "assets/images";
const contestImages = `${images}/contest`;
const profileImages = `${images}/profile`;
const icons = "assets/icons";
const commonIcons = `${icons}/common`;
const contestIcons = `${icons}/contest`;

export default {
    Images: {
        profile: {
            dummyImage: `${profileImages}/dummyImage.png`
        },
        contests: {
            contest1v1: `${contestImages}/contest1v1.svg`,
            poolcontest: `${contestImages}/poolcontest.svg`
        }
    },

    Icons: {
        contest: {
            topRightArrow: `${contestIcons}/Right.svg`,
            trophy2: `${contestIcons}/trophy2.svg`,
            icon1v1: `${contestIcons}/1v1.svg`,
        },
        common: {
            likeIcon: `${commonIcons}/like.svg`,
            comment: `${commonIcons}/comment.svg`,
            arrow: `${commonIcons}/arrow.svg`
        }
    }
}