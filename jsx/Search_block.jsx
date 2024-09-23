function Search_block() {
    return (
    <>
        <div id="search_block">
            <div id="search_block_box">
                <div id="box_seach">
                    <p id="box_seach_p">地區篩選</p>
                    <div id="Text_display_box"></div>
                </div>
                <div id="filter_blocks">
                    <div id="area_box">
                        <div id="area">
                            <img src="./image/coffee_beans_1.svg" alt="" className="coffee_img1" />
                            <p className="filter_blocks_p">地區</p>
                        </div>
                        <div id="area_seach">
                            <div className="Regional_distribution" id="brazil_Region">
                                <p className="Regional_distribution_p">巴西</p>
                            </div>
                            <div className="Regional_distribution" id="indonesia_Region">
                                <p className="Regional_distribution_p">印尼</p>
                            </div>
                            <div className="Regional_distribution" id="vietnam_Region">
                                <p className="Regional_distribution_p">越南</p>
                            </div>
                            <div className="Regional_distribution" id="india_Region">
                                <p className="Regional_distribution_p">印度</p>
                            </div>
                            <div className="Regional_distribution" id="ethiopia_Region">
                                <p className="Regional_distribution_p">埃塞俄比亞</p>
                            </div>
                            <div className="Regional_distribution" id="kenya_Region">
                                <p className="Regional_distribution_p">肯尼亞</p>
                            </div>
                            <div className="Regional_distribution" id="rwanda_Region">
                                <p className="Regional_distribution_p">盧旺達</p>
                            </div>
                        </div>
                    </div>
                    <div id="characteristic_box">
                        <div id="characteristic">
                            <img src="./image/coffee_beans_1.svg" alt="" className="coffee_img1" />
                            <p className="filter_blocks_p">特性</p>
                        </div>
                        <div id="characteristic_seach">
                            <div className="oily" id="low_Oiliness">
                                <p className="oily_p">低油性</p>
                            </div>
                            <div className="oily" id="medium_Oiliness">
                                <p className="oily_p">中等油性</p>
                            </div>
                            <div className="oily" id="high_Oiliness">
                                <p className="oily_p">高油性</p>
                            </div>
                        </div>
                    </div>
                    <div id="Baking_method_box">
                        <div id="Baking_method">
                            <img src="./image/coffee_beans_1.svg" alt="" className="coffee_img1" />
                            <p className="filter_blocks_p">烘培方式</p>
                        </div>
                        <div id="Treatment_method">
                            <div className="Processing" id="washing_Method">
                                <p className="Processing_p">水洗法</p>
                            </div>
                            <div className="Processing" id="encryption">
                                <p className="Processing_p">密處理法</p>
                            </div>
                            <div className="Processing" id="sun_Exposure">
                                <p className="Processing_p">日曬法</p>
                            </div>
                            <div className="Processing" id="fermentation">
                                <p className="Processing_p">發酵法</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Text_carousel_area">
                <img src="./image/Text_carousel_area_img.svg" alt="" id="Text_carousel_area_img" />
                <p id="Text_carousel_area_p" >
                    <marquee color="gray" hspace="1000" scrollamount="10" >
                        一杯好的咖啡需要好的咖啡豆來沖泡，才能品味出他的味道，所以在沖泡時能看的出沖泡咖啡的人的性個。
                    </marquee>
                </p>
            </div>
            <div id="mouse_icon">
                <figure className="mouse_icon_img">
                    <img src="./image/mouse_icon.svg" alt="" />
                </figure>
            </div>
        </div>
    </>
    )
}