function Second_page_frame() {

    return (
        <>
            <div className="Second_page_frame">
                <div className="Process_processing_diagram">
                    <div>
                        <p>處理流程</p>
                        <img src="./image/card_map.svg" alt="" />
                    </div>
                </div>
                <div id="text_block">
                    <div className="block1">
                        <div className="method  smoove" data-move-x="-50%" data-rotate-y="-90deg">
                            <img src="./image/water-3.png" alt="" />
                            <div className="washing_method_p">
                                <div className="block_lable">
                                    <p>水洗法</p>
                                </div>
                                <div className="block_text" id="block_text1">
                                    <p id="block_text1_p1">
                                        將咖啡豆投入脫皮機中，去除外皮和果肉，再將咖啡豆放入發酵槽中進行發酵，過程至少需要12到48小時。當發酵完成後，用大量的水清洗咖啡豆，去除殘留的粘液並曬乾，將咖啡豆去殼並按大小、密度等進行分級，以便進行後續加工和包裝。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="method  smoove" id="method1_1" data-move-x="-50%" data-rotate-y="-90deg">
                            <img src="./image/sun-3.png" alt="" />
                            <div className="washing_method_p">
                                <div className="block_lable">
                                    <p>日曬法</p>
                                </div>
                                <div className="block_text" id="block_text2">
                                    <p id="block_text1_p2">將咖啡豆直接攤開在乾燥台或乾燥場上晾曬，晾曬過程中咖啡豆需要不斷翻動確保均勻乾燥和防止發霉
                                        ，通常晾曬時間為2至4週，咖啡櫻桃完全乾燥後，去除外果皮和內果皮。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block2">
                        <div className="vertical_box">
                            <div>
                                <img src="./image/coffee_beans_1.svg" alt="" />
                            </div>
                            <div className="vertical_box_p">
                                <div id="vertical_box_p_text1">
                                    <p>了解不同的處理方式</p>
                                </div>
                                <div id="vertical_box_p_text2">
                                    <p>能知道自己喜歡的是那些咖啡豆</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block3">
                        <div className="method  smoove" data-move-x="50%" data-rotate-y="90deg">
                            <div className="washing_method_p">
                                <div className="block_lable">
                                    <p>密處理法</p>
                                </div>
                                <div className="block_text" id="block_text3">
                                    <p id="block_text1_p3">將咖啡豆去皮，並保留部分或全部果肉，再將咖啡豆放到發酵槽
                                        中短暫發酵，以增加風味複雜性，最後將咖啡豆攤開在乾燥台或乾燥場上晾曬，晾曬過程中需要定期翻動以均勻乾燥。
                                    </p>
                                </div>
                            </div>
                            <img src="./image/honey_juice-3.png" alt="" />
                        </div>
                        <div className="method  smoove" id="method1_2" data-move-x="50%" data-rotate-y="90deg">
                            <div className="washing_method_p">
                                <div className="block_lable">
                                    <p>發酵法</p>
                                </div>
                                <div className="block_text" id="block_text4">
                                    <p id="block_text1_p4">
                                        將咖啡豆去皮並放到發酵槽中，發酵時間為12到48小時，在發酵過程中酵素會分解殘留的粘液層，需定期檢查發酵狀態，在發酵完成後，用清水洗去剩餘的粘液層。
                                    </p>
                                </div>
                            </div>
                            <img src="./image/fermentation-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}