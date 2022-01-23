import foot from './footer.module.css'

const Footer = () => {
    return (
        <div className={foot.down}>
            <p className={foot.years}>&#xA9;2022 SumyWeb</p>
            <div className={foot.wrapimg}>
                <div><a href=""><img src={require('./telegramm.png')} alt="telegramm" className={foot.image}/></a></div>
                <div><a href=""><img src={require('./insta.png')} alt="instagramm"className={foot.image}/></a></div>
                <div><a href=""><img src={require('./facebooksvg.png')} alt="facebook"className={foot.image}/></a></div>
            </div>


        </div>
    );
};

export default Footer;