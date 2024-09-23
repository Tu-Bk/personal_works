function Recommendation_box() {
    return (
        <>
            <div className="Recommendation_box">
                <div className="Recommended_tab_bar">
                    <div>
                        <p>咖啡豆推薦</p>
                        <img src="./image/card_map.svg" alt="" />
                    </div>
                </div>
                <div className="coffee_display">
                    <div className="coffee_left">
                        <div className="specialty">
                            <p>精品咖啡</p>
                            <div className="specialty_tips">
                                <div className="specialty_tips_img">
                                    <img src="./image/coffee_beans_1.svg" alt="" />
                                </div>
                                <p>喜好精品咖啡的人，都會注重細節</p>
                            </div>
                        </div>
                        <div className="coffee_p">
                            <p>經過精心種植、精細處理和烘焙的高品質咖啡豆，在風味、酸度、甜度、餘韻和整體平衡性方面表現卓越，並經過咖啡品質學會（SCA）等專業機構的評分，一般得分在80分以上（滿分為100分）。</p>
                        </div>
                    </div>
                    <div className="coffee_right">
                        <img src="./image/specialty_coffee.svg" alt="" />
                    </div>
                </div>
                <div className="coffee_display2">
                    <div className="coffee_left">
                        <div className="specialty">
                            <p id="specialty_p">單品咖啡</p>
                            <div className="specialty_tips">
                                <div className="specialty_tips_img">
                                    <img src="./image/coffee_beans_1.svg" alt="" />
                                </div>
                                <p>喜好單品咖啡的人，喜歡探索不同的東西</p>
                            </div>
                        </div>
                        <div className="coffee_p">
                            <p>這些咖啡豆反映生長環境、氣候和土壤的特徵，有明顯的風味特徵，例如特定的果香、酸度或其他風味標誌，為咖啡愛好者提供探索不同風味和地域特性的機會。</p>
                        </div>
                    </div>
                    <div className="coffee_right">
                        <img src="./image/single_origin_coffee.svg" alt="" />
                    </div>
                </div>
                <div className="frame_block">
                    <div className="frame_block_box">
                        <div className="frame_block_box_div1">
                            <div>
                                <p className="middle_p">精品與單品差別</p>
                            </div>
                            <div className="middle">
                                <p className="middle_p">精品咖啡</p>
                            </div>
                            <div>
                                <p className="middle_p">單品咖啡</p>
                            </div>
                        </div>
                        <div className="frame_block_box_div2">
                            <div id="div2_middle_p1">
                                <p id="div2_middle_p1_p">特色</p>
                            </div>
                            <div className="middle" id="div2_middle_p2">
                                <p className="middle_p">追求高品質、透明供應鏈和獨特風味</p>
                            </div>
                            <div className="middle" id="div2_middle_p3">
                                <p className="middle_p">強調特定地區的獨特風味和產地特徵</p>
                            </div>
                        </div>
                        <div className="frame_block_box_div3">
                            <div id="div2_middle_p1">
                                <p id="div2_middle_p1_p">產量</p>
                            </div>
                            <div className="middle" id="div2_middle_p2">
                                <p className="middle_p">少</p>
                            </div>
                            <div className="middle" id="div2_middle_p3">
                                <p className="middle_p">少</p>
                            </div>
                        </div>
                        <div className="frame_block_box_div4">
                            <div id="div2_middle_p1">
                                <p id="div2_middle_p1_p">品質</p>
                            </div>
                            <div className="middle" id="div2_middle_p2">
                                <p className="middle_p">高</p>
                            </div>
                            <div className="middle" id="div2_middle_p3">
                                <p className="middle_p">高</p>
                            </div>
                        </div>
                        <div className="frame_block_box_div5">
                            <div id="div2_middle_p1">
                                <p id="div2_middle_p1_p">適合對象</p>
                            </div>
                            <div className="middle" id="div2_middle_p2">
                                <p className="middle_p">對咖啡有特殊需求者</p>
                            </div>
                            <div className="middle" id="div2_middle_p3">
                                <p className="middle_p">喜歡各地咖啡者</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}