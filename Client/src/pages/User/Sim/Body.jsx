import CardGame from './CardGame';
import Frame from './Frame';
import Info from './Info';
import Title from './Title';

function Body() {
    const cardGame = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const price = ['10.000', '20.000', '50.000', '100.000', '200.000', '500.000'];
    return (
        <div className="container w-[1200px] flex  mt-[3rem] ">
            <div className="col1 w-[68%] pr-[15px]">
                <div className="head-text">
                    Chọn <b>GÓI CƯỚC</b>, sau đó bấm <b>CHỌN SỐ</b> để xem <b>HƠN 400.000 SIM</b> tại <b>TGDĐ</b>
                </div>
                <Title />
                <Frame />
                <Frame />
                <Frame />
            </div>

            {/* Khung phải */}
            <div className="col2 w-[30%]">
                <div className="contentSim p-[1rem] border border-gray-500 rounded mb-[0.5rem]">
                    <h2 className="titlesimcard block leading-[2.5rem] font-bold text-[1.8rem] ">Mua thẻ game</h2>
                    <div className="stephow">
                        <div className="textstep text-[1.4rem]">
                            <strong>Bước 1:</strong> Chọn nhà cung cấp
                        </div>
                    </div>
                    <div className="homenetwork y2020 mt-[1rem]" id="gamenetwork" data-value="0">
                        {cardGame.map((index) => {
                            return <CardGame isPrice="False" key={index} />;
                        })}
                        <div className="textstep morepadding">
                            <strong>Bước 2:</strong> Chọn mệnh giá thẻ
                        </div>
                        {price.map((src, index) => {
                            return (
                                <CardGame isPrice="True" key={index}>
                                    {src}
                                </CardGame>
                            );
                        })}

                        {/* <span id="warningnetworkgame" className="warning error">Vui lòng chọn nhà cung cấp</span> */}
                    </div>
                </div>
                {/* Khung hai */}
                <div className="contentSim p-[1rem] border border-gray-500 rounded mb-[0.5rem]">
                    <h2 className="titlesimcard block leading-[2.5rem] font-bold text-[1.8rem] ">MUA MÃ THẺ CÀO</h2>
                    <div className="stephow">
                        <div className="textstep text-[1.4rem]">
                            <strong>Bước 1:</strong> Chọn nhà mạng
                        </div>
                    </div>
                    <div className="homenetwork y2020 mt-[1rem]" id="gamenetwork" data-value="0">
                        {cardGame.map((index) => {
                            return <CardGame isPrice="False" key={index} />;
                        })}
                        <div className="textstep morepadding">
                            <strong>Bước 2:</strong> Chọn mệnh giá thẻ
                        </div>
                        <div className="textdiscount">
                            <span className="text-[#FF4D74]">Giảm 3%</span> cho thẻ mệnh giá từ 100.000đ.
                        </div>
                        {price.map((src, index) => {
                            return (
                                <CardGame isPrice="True" key={index}>
                                    {src}
                                </CardGame>
                            );
                        })}
                    </div>
                </div>
                {/* Khung ba */}
                <div className="contentSim p-[1rem] border border-gray-500 rounded mb-[0.5rem]">
                    <h2 className="titlesimcard block leading-[2.5rem] font-bold text-[1.8rem] ">
                        NẠP TIỀN ĐIỆN THOẠI
                    </h2>
                    <div className="stephow">
                        <div className="textstep text-[1.4rem]">
                            <strong>Bước 1:</strong> Nhập số điện thoại
                        </div>
                    </div>
                    <input
                        className="numberphone block w-[99%] mr-[1rem] mb-auto py-[1rem] h-[4rem] indent-[5px] text-[1.4rem] border border-[#d9d9d9] rounded-md"
                        maxLength="10"
                        type="tel"
                        placeholder="Số điện thoại"
                    ></input>
                    <div className="stephow">
                        <div className="textstep text-[1.4rem]">
                            <strong>Bước 2:</strong> Chọn nhà mạng
                        </div>
                    </div>
                    <div className="homenetwork y2020 mt-[1rem]" id="gamenetwork" data-value="0">
                        {cardGame.map((index) => {
                            return <CardGame isPrice="False" key={index} />;
                        })}
                        <div className="textstep morepadding">
                            <strong>Bước 3:</strong> Chọn mệnh giá thẻ
                        </div>
                        <div className="textdiscount">
                            <span className="text-[#FF4D74]">Giảm 3%</span> cho thẻ mệnh giá từ 100.000đ.
                        </div>
                        {price.map((src, index) => {
                            return (
                                <CardGame isPrice="True" key={index}>
                                    {src}
                                </CardGame>
                            );
                        })}
                    </div>
                </div>

                {/* Thông tin */}
                <div className="thutuc p-[1rem] pt-[1rem]">
                    <span className="titlesimcard block text-[1.8rem] font-bold ">Thủ tục đăng ký sim</span>
                    <span className="block text-[1.4rem]">
                        1. BẢN GỐC CMND (cấp dưới 15 năm) hoặc Căn cước công dân (còn thời hạn) hoặc Hộ chiếu (còn thời
                        hạn) của chủ thuê bao.
                    </span>
                    <span className="block text-[1.4rem]">
                        2. Ảnh chân dung của chủ thuê bao tại thời điểm giao dịch.
                    </span>
                </div>
                <Info />
            </div>
        </div>
    );
}

export default Body;
