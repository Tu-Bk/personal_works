function Filter() {

    const cards =
        [
            {
                id: 'card1',
                img: './image/cards_img-4.png',
                area: '巴西',
                oily: '中等油性'
            },
            {
                id: 'card2',
                img: './image/cards_img-4.png',
                area: '印尼',
                oily: '高油性'
            },
            {
                id: 'card3',
                img: './image/cards_img-4.png',
                area: '越南',
                oily: '中等油性'
            },
            {
                id: 'card4',
                img: './image/cards_img-4.png',
                area: '印度',
                oily: '高油性'
            },
            {
                id: 'card5',
                img: './image/cards_img-4.png',
                area: '埃塞俄比亞',
                oily: '低油性'
            },
            {
                id: 'card6',
                img: './image/cards_img-4.png',
                area: '肯尼亞',
                oily: '中等油性'
            },
            {
                id: 'card7',
                img: './image/cards_img-4.png',
                area: '盧旺達',
                oily: '中等油性'
            },
            {
                id: 'card8',
                img: './image/cards_img-4.png',
                area: '剛果',
                oily: '中等油性'
            }
        ];

    return (
        <>
            <div id="filter">
                <div id="filter_box">
                    <div id="Filter_results">
                        <p id="Filter_results_p">篩選結果</p>
                        <div>
                            <img src="./image/card_background.svg" alt="" />
                        </div>
                    </div>
                    <div id="Filter_results_box">
                        <div id="Filter_bar1">
                            {/* <div className="medium_Oiliness_box" id="card1">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="brazil_Region">巴西</p>
                                        <div className="card1_nature medium_Oiliness">
                                            <p>中等油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="high_Oiliness_box" id="card2">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="indonesia_Region">印尼</p>
                                        <div className="card1_nature high_Oiliness">
                                            <p>高油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="medium_Oiliness_box" id="card3">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="vietnam_Region">越南</p>
                                        <div className="card1_nature medium_Oiliness">
                                            <p>中等油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="high_Oiliness_box" id="card4">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="india_Region">印度</p>
                                        <div className="card1_nature high_Oiliness">
                                            <p>高油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="low_Oiliness_box" id="card5">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="ethiopia_Region">埃塞俄比亞</p>
                                        <div className="card1_nature low_Oiliness">
                                            <p>低油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="medium_Oiliness_box" id="card6">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="kenya_Region">肯尼亞</p>
                                        <div className="card1_nature medium_Oiliness">
                                            <p>中等油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="medium_Oiliness_box" id="card7">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div>
                                    <div id="card1_city">
                                        <p className="city" id="rwanda_Region">盧旺達</p>
                                        <div className="card1_nature medium_Oiliness">
                                            <p>中等油性</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="medium_Oiliness_box" id="card8">
                                <img src="./image/cards_img-4.png" alt="" />
                                <div id="card1_city">
                                    <p className="city">剛果</p>
                                    <div className="card1_nature medium_Oiliness">
                                        <p>中等油性</p>
                                    </div>
                                </div>
                            </div> */}

                            {/* map */}
                            {cards.map((item) => {
                                return (

                                    <div className="medium_Oiliness_box" id={item.id} key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div>
                                            <div id="card1_city">
                                                <p className="city" id="brazil_Region">{item.area}</p>
                                                <div className="card1_nature medium_Oiliness">
                                                    <p>{item.oily}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
