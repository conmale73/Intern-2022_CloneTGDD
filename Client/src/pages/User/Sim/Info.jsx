function Info() {
    const info = [
        ' https://cdn.tgdd.vn/2021/01/content/LogoViettelred-300x79.png',
        'https://cdn.tgdd.vn/2020/09/content/2-mobi1x-130x48.png',
        'https://cdn.tgdd.vn/2020/09/content/3-vina1x-130x48.png',
        'https://cdn.tgdd.vn/2020/09/content/4-vietnammobile1x-130x48.png',
        'https://cdn.tgdd.vn/2020/10/content/itel-130x48.png',
        'https://cdn.tgdd.vn/2021/08/content/local-telecom-logowebthe-130x48-130x48-2.png',
    ];
    return (
        <div className="thutuc p-[1rem] pt-[1rem]">
            <span className="titlesimcard block text-[1.8rem] font-bold ">DỊCH VỤ SIM TẠI TGDĐ</span>
            <span className="subservice">
                Chỉ thực hiện cho <b>KHÁCH HÀNG CÁ NHÂN</b>
            </span>
            {info.map((src, index) => {
                return (
                    <div key={index}>
                        <img className="iconsim-sup w-[80px] h-auto mt-[1rem]" alt="" src={src}></img>
                        <b>
                            <p className="text-[1.3rem]">Áp dụng trên toàn quốc</p>
                            <p className="text-[1.3rem]">1. Đổi sim 4G miễn phí.</p>
                            <p className="text-[1.3rem]">2. Đổi sang esim.</p>
                            <p className="text-[1.3rem]">
                                3. Thay sim mất, hỏng (Phí 25.000đ/sim, dành cho khách hàng chính chủ).
                            </p>
                            <p className="text-[1.3rem]">
                                4. Đổi sang esim, áp dụng cho sim trả trước (phí 25.000đ/sim).
                            </p>
                        </b>
                    </div>
                );
            })}

            <span className="titlesimcard block text-[1.8rem] font-bold ">TỔNG ĐÀI NHÀ MẠNG</span>
            <ul>
                {info.map((src, index) => {
                    return (
                        <li key={index}>
                            <img className="iconsim-sup w-[80px] h-auto mt-[1rem]" alt="" src={src} />
                            <div className="text-[1.3rem]">
                                Tổng đài 24/24:&nbsp;<strong>1800.1090 - 9090</strong>
                            </div>
                            <div className="text-[1.3rem]">
                                Đường dây nóng:
                                <br />
                                <strong>0908.144.144</strong>
                            </div>
                            <div className="text-[1.3rem]">
                                Các đầu số nhận biết:
                                <br />
                                <strong>090 - 093 - 089 - 07</strong>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Info;
