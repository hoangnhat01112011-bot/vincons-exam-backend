import os
import polars as pl
from pathlib import Path

# Mapping of Vietnamese stock tickers to Industry (ext_hy_ths) and Concepts (ext_gn_ths)
VN_SECTORS = {
    # Ngân hàng
    "TCB": ("Ngân hàng", "Ngân hàng;VN30;Nâng hạng thị trường;Cổ tức tiền mặt"),
    "VCB": ("Ngân hàng", "Ngân hàng;VN30;Vốn hóa lớn;Nâng hạng thị trường"),
    "BID": ("Ngân hàng", "Ngân hàng;VN30;Vốn hóa lớn;Nâng hạng thị trường"),
    "CTG": ("Ngân hàng", "Ngân hàng;VN30;Vốn hóa lớn;Nâng hạng thị trường"),
    "MBB": ("Ngân hàng", "Ngân hàng;VN30;Nâng hạng thị trường;Cổ tức tiền mặt"),
    "VPB": ("Ngân hàng", "Ngân hàng;VN30;Nâng hạng thị trường"),
    "ACB": ("Ngân hàng", "Ngân hàng;VN30;Cổ tức tiền mặt"),
    "HDB": ("Ngân hàng", "Ngân hàng;VN30;Nâng hạng thị trường"),
    "STB": ("Ngân hàng", "Ngân hàng;VN30;Tái cơ cấu"),
    "TPB": ("Ngân hàng", "Ngân hàng;Chuyển đổi số"),
    "MSB": ("Ngân hàng", "Ngân hàng"),
    "VIB": ("Ngân hàng", "Ngân hàng;Cổ tức tiền mặt"),
    "EIB": ("Ngân hàng", "Ngân hàng;Thâu tóm sáp nhập"),
    "LPB": ("Ngân hàng", "Ngân hàng;VN30"),
    "OCB": ("Ngân hàng", "Ngân hàng"),
    "SHB": ("Ngân hàng", "Ngân hàng;VN30"),
    "BAB": ("Ngân hàng", "Ngân hàng"),
    "NAB": ("Ngân hàng", "Ngân hàng"),
    "ABB": ("Ngân hàng", "Ngân hàng"),
    "BVB": ("Ngân hàng", "Ngân hàng"),
    "PGB": ("Ngân hàng", "Ngân hàng"),

    # Bất động sản Dân dụng
    "VHM": ("Bất động sản", "Bất động sản;VN30;Vốn hóa lớn;Nâng hạng thị trường"),
    "VIC": ("Bất động sản", "Bất động sản;VN30;Xe điện VinFast;Vốn hóa lớn"),
    "VRE": ("Bất động sản", "Bất động sản;VN30;Bán lẻ thương mại"),
    "KDH": ("Bất động sản", "Bất động sản;Quỹ đất sạch"),
    "NLG": ("Bất động sản", "Bất động sản;Nhà ở giá rẻ"),
    "PDR": ("Bất động sản", "Bất động sản;Tái cơ cấu nợ"),
    "DIG": ("Bất động sản", "Bất động sản;Quỹ đất lớn"),
    "DXG": ("Bất động sản", "Bất động sản;Môi giới BĐS"),
    "CEO": ("Bất động sản", "Bất động sản;BĐS Nghỉ dưỡng"),
    "NVL": ("Bất động sản", "Bất động sản;Tái cơ cấu nợ"),
    "DXS": ("Bất động sản", "Bất động sản;Môi giới BĐS"),
    "HDG": ("Bất động sản", "Bất động sản;Năng lượng tái tạo"),
    "TCH": ("Bất động sản", "Bất động sản;Hải Phòng"),
    "HDC": ("Bất động sản", "Bất động sản;Vũng Tàu"),
    "KHG": ("Bất động sản", "Bất động sản"),
    "SCR": ("Bất động sản", "Bất động sản"),

    # Bất động sản Khu công nghiệp
    "KBC": ("Bất động sản Khu công nghiệp", "Bất động sản KCN;FDI;Bắc Ninh"),
    "IDC": ("Bất động sản Khu công nghiệp", "Bất động sản KCN;Cổ tức tiền mặt"),
    "SZC": ("Bất động sản Khu công nghiệp", "Bất động sản KCN;Châu Đức"),
    "BCM": ("Bất động sản Khu công nghiệp", "Bất động sản KCN;VN30;Bình Dương"),
    "VGC": ("Bất động sản Khu công nghiệp", "Bất động sản KCN;Vật liệu xây dựng"),
    "TIP": ("Bất động sản Khu công nghiệp", "Bất động sản KCN"),
    "D2D": ("Bất động sản Khu công nghiệp", "Bất động sản KCN;Cổ tức cao"),

    # Chứng khoán & Tài chính
    "SSI": ("Chứng khoán", "Chứng khoán;VN30;Nâng hạng thị trường;KRX"),
    "VND": ("Chứng khoán", "Chứng khoán;Nâng hạng thị trường;KRX"),
    "VCI": ("Chứng khoán", "Chứng khoán;Bản Việt;KRX"),
    "HCM": ("Chứng khoán", "Chứng khoán;HSC;KRX"),
    "SHS": ("Chứng khoán", "Chứng khoán;Tự doanh mạnh"),
    "MBS": ("Chứng khoán", "Chứng khoán;MB Group"),
    "FTS": ("Chứng khoán", "Chứng khoán;FPT Group;Công nghệ"),
    "BSI": ("Chứng khoán", "Chứng khoán;BIDV Group;Hàn Quốc"),
    "CTS": ("Chứng khoán", "Chứng khoán;VietinBank Group"),
    "VIX": ("Chứng khoán", "Chứng khoán;Tự doanh mạnh"),
    "AGR": ("Chứng khoán", "Chứng khoán;Agribank Group"),
    "ORS": ("Chứng khoán", "Chứng khoán;Trái phiếu"),
    "TCI": ("Chứng khoán", "Chứng khoán"),

    # Thép & Vật liệu xây dựng
    "HPG": ("Thép & Vật liệu", "Thép;VN30;Dung Quất 2;Vốn hóa lớn"),
    "NKG": ("Thép & Vật liệu", "Thép;Xuất khẩu Tôn mạ"),
    "HSG": ("Thép & Vật liệu", "Thép;Hoa Sen;Tôn mạ"),
    "VGS": ("Thép & Vật liệu", "Thép;Bất động sản"),
    "SMC": ("Thép & Vật liệu", "Thép;Thương mại Thép"),
    "BCC": ("Thép & Vật liệu", "Vật liệu xây dựng;Xi măng"),
    "HT1": ("Thép & Vật liệu", "Vật liệu xây dựng;Xi măng Hà Tiên"),

    # Dầu khí
    "GAS": ("Dầu khí", "Dầu khí;VN30;LNG Thị Vải;Vốn hóa lớn;Cổ tức tiền mặt"),
    "PVD": ("Dầu khí", "Dầu khí;Giàn khoan;Dịch vụ Dầu khí"),
    "PVS": ("Dầu khí", "Dầu khí;Dự án Lô B Ô Môn;Điện gió ngoài khơi"),
    "PVT": ("Dầu khí", "Dầu khí;Vận tải Dầu khí;Cổ tức tiền mặt"),
    "BSR": ("Dầu khí", "Dầu khí;Lọc hóa dầu Bình Sơn;Chuyển sàn HOSE"),
    "PLX": ("Dầu khí", "Dầu khí;VN30;Phân phối Xăng dầu"),
    "OIL": ("Dầu khí", "Dầu khí;Phân phối Xăng dầu"),

    # Công nghệ thông tin & Viễn thông
    "FPT": ("Công nghệ thông tin", "Công nghệ thông tin;VN30;Trí tuệ nhân tạo (AI);Xuất khẩu phần mềm"),
    "CMG": ("Công nghệ thông tin", "Công nghệ thông tin;Trung tâm dữ liệu (Data Center)"),
    "ELC": ("Công nghệ thông tin", "Công nghệ thông tin;Giao thông thông minh"),
    "CTR": ("Công nghệ thông tin", "Viễn thông;Viettel Construction;5G;Hạ tầng viễn thông"),
    "VGI": ("Công nghệ thông tin", "Viễn thông;Viettel Global;Đầu tư nước ngoài"),
    "FOX": ("Công nghệ thông tin", "Viễn thông;FPT Telecom"),

    # Bán lẻ & Tiêu dùng
    "MWG": ("Bán lẻ & Tiêu dùng", "Bán lẻ;VN30;Bách Hóa Xanh;Thế Giới Di Động"),
    "FRT": ("Bán lẻ & Tiêu dùng", "Bán lẻ;Chuỗi nhà thuốc Long Châu;FPT Shop"),
    "DGW": ("Bán lẻ & Tiêu dùng", "Bán lẻ;Phân phối sản phẩm công nghệ"),
    "PNJ": ("Bán lẻ & Tiêu dùng", "Bán lẻ;Vàng bạc đá quý;Cổ tức tiền mặt"),
    "MSN": ("Bán lẻ & Tiêu dùng", "Hàng tiêu dùng;VN30;Masan;WinCommerce"),
    "VNM": ("Bán lẻ & Tiêu dùng", "Hàng tiêu dùng;VN30;Vinamilk;Cổ tức tiền mặt"),
    "SAB": ("Bán lẻ & Tiêu dùng", "Hàng tiêu dùng;VN30;Bia Sabeco"),
    "QNS": ("Bán lẻ & Tiêu dùng", "Hàng tiêu dùng;Đường Quảng Ngãi;Sữa đậu nành"),
    "DBC": ("Bán lẻ & Tiêu dùng", "Nông nghiệp;Chăn nuôi Heo;Vaccine Dịch tả heo"),
    "BAF": ("Bán lẻ & Tiêu dùng", "Nông nghiệp;Chăn nuôi Heo 3F"),

    # Hóa chất & Phân bón
    "DGC": ("Hóa chất & Phân bón", "Hóa chất;Phốt pho vàng;Bán dẫn;Cổ tức tiền mặt"),
    "DCM": ("Hóa chất & Phân bón", "Phân bón;Phân bón Cà Mau;Cổ tức tiền mặt"),
    "DPM": ("Hóa chất & Phân bón", "Phân bón;Phân bón Phú Mỹ;Cổ tức tiền mặt"),
    "CSV": ("Hóa chất & Phân bón", "Hóa chất;Hóa chất cơ bản Miền Nam"),
    "BFC": ("Hóa chất & Phân bón", "Phân bón;Phân bón Bình Điền"),
    "GVR": ("Hóa chất & Phân bón", "Cao su;VN30;Tập đoàn Cao su;BĐS KCN"),
    "PHR": ("Hóa chất & Phân bón", "Cao su;Cao su Phước Hòa;BĐS KCN"),
    "DPR": ("Hóa chất & Phân bón", "Cao su;Cao su Đồng Phú;BĐS KCN"),

    # Dệt may & Thủy sản
    "VHC": ("Dệt may & Thủy sản", "Thủy sản;Cá tra xuất khẩu;Xuất khẩu Mỹ"),
    "ANV": ("Dệt may & Thủy sản", "Thủy sản;Cá tra Nam Việt"),
    "IDI": ("Dệt may & Thủy sản", "Thủy sản;Cá tra IDI"),
    "FMC": ("Dệt may & Thủy sản", "Thủy sản;Tôm Sao Ta"),
    "TNG": ("Dệt may & Thủy sản", "Dệt may;Dệt may Thái Nguyên;Xuất khẩu dệt may"),
    "MSH": ("Dệt may & Thủy sản", "Dệt may;May Sông Hồng;Cổ tức tiền mặt"),
    "TCM": ("Dệt may & Thủy sản", "Dệt may;May Thành Công"),
    "GIL": ("Dệt may & Thủy sản", "Dệt may;Sản xuất Amazon"),

    # Xây dựng & Đầu tư công
    "VCG": ("Xây dựng & Hạ tầng", "Đầu tư công;Sân bay Long Thành;Vinaconex"),
    "HHV": ("Xây dựng & Hạ tầng", "Đầu tư công;Đèo Cả;Hạ tầng giao thông"),
    "LCG": ("Xây dựng & Hạ tầng", "Đầu tư công;Lizen;Hạ tầng cao tốc"),
    "FCN": ("Xây dựng & Hạ tầng", "Đầu tư công;Fecon;Nền móng công trình"),
    "C4G": ("Xây dựng & Hạ tầng", "Đầu tư công;CIENCO 4"),
    "KSB": ("Xây dựng & Hạ tầng", "Đầu tư công;Đá xây dựng Bình Dương"),
    "CTD": ("Xây dựng & Hạ tầng", "Xây dựng;Cotecons;Xây dựng công nghiệp"),

    # Vận tải & Logistics
    "GMD": ("Vận tải & Logistics", "Logistics;Cảng biển Gemalink;Gemadept"),
    "HAH": ("Vận tải & Logistics", "Logistics;Vận tải container;Hải An"),
    "VSC": ("Vận tải & Logistics", "Logistics;Cảng Container Nam Hải"),
    "VJC": ("Vận tải & Logistics", "Hàng không;VN30;VietJet Air"),
    "HVN": ("Vận tải & Logistics", "Hàng không;Vietnam Airlines"),
    "ACV": ("Vận tải & Logistics", "Hàng không;Tổng công ty Cảng hàng không"),

    # Dược phẩm & Y tế
    "DHG": ("Dược phẩm & Y tế", "Dược phẩm;Dược Hậu Giang"),
    "IMP": ("Dược phẩm & Y tế", "Dược phẩm;Imexpharm;Tiêu chuẩn EU-GMP"),
    "DBD": ("Dược phẩm & Y tế", "Dược phẩm;Dược Bình Định;Thuốc ung thư"),
    "TRA": ("Dược phẩm & Y tế", "Dược phẩm;Traphaco;Đông dược"),
    "DVN": ("Dược phẩm & Y tế", "Dược phẩm;Tổng công ty Dược Việt Nam"),

    # Điện & Năng lượng tái tạo
    "POW": ("Điện & Năng lượng", "Điện;VN30;Điện lực Dầu khí;Nhơn Trạch 3 & 4"),
    "REE": ("Điện & Năng lượng", "Điện;Năng lượng tái tạo;Cơ điện REE"),
    "PC1": ("Điện & Năng lượng", "Điện;Xây lắp điện 1;Quặng Niken;Điện gió"),
    "GEG": ("Điện & Năng lượng", "Điện;Điện Gia Lai;Điện mặt trời;Điện gió"),
    "TV2": ("Điện & Năng lượng", "Điện;Tư vấn điện 2"),
    "BCG": ("Điện & Năng lượng", "Điện;Bamboo Capital;Năng lượng tái tạo")
}

def generate_datasets():
    gn_rows = []
    hy_rows = []
    
    for sym, (industry, concepts) in VN_SECTORS.items():
        gn_rows.append({
            "symbol": sym,
            "code": sym,
            "股票代码": sym,
            "股票简称": f"{sym} (VN)",
            "所属概念": concepts
        })
        hy_rows.append({
            "symbol": sym,
            "code": sym,
            "股票代码": sym,
            "股票简称": f"{sym} (VN)",
            "所属同花顺行业": industry
        })
        
    df_gn = pl.DataFrame(gn_rows)
    df_hy = pl.DataFrame(hy_rows)
    
    base_dir = Path("tick-stock-panel/data/ext_data")
    gn_dir = base_dir / "ext_gn_ths"
    hy_dir = base_dir / "ext_hy_ths"
    
    gn_dir.mkdir(parents=True, exist_ok=True)
    hy_dir.mkdir(parents=True, exist_ok=True)
    
    df_gn.write_parquet(gn_dir / "part.parquet")
    df_hy.write_parquet(hy_dir / "part.parquet")
    
    print(f"Generated {len(gn_rows)} concepts and industries for VN Stock Market!")

if __name__ == "__main__":
    generate_datasets()
