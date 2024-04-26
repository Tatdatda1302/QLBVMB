package com.example.qlbvmb.service;

import com.example.qlbvmb.model.Chuyenbay;
import com.example.qlbvmb.model.CtHangve;
import com.example.qlbvmb.repository.FlightRepo;
import com.example.qlbvmb.repository.SanBayRepo;
import com.example.qlbvmb.repository.CTHangVeRepo;
import com.example.qlbvmb.model.TrungGian;
import com.example.qlbvmb.repository.TrungGianRepo;
import com.example.qlbvmb.repository.SoGheRepo;
import com.example.qlbvmb.repository.MayBayRepo;
import com.example.qlbvmb.model.SanBay;
import com.example.qlbvmb.model.DSGhe;
import com.example.qlbvmb.model.Maybay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FlightService {

    @Autowired
    FlightRepo flight_repo;

    @Autowired
    SanBayRepo sanbay_repo;

    @Autowired
    CTHangVeRepo cthangve_repo;

    @Autowired
    TrungGianRepo trunggian_repo;

    @Autowired
    SoGheRepo soghe_repo;

    @Autowired
    MayBayRepo maybay_repo;

    public Chuyenbay createChuyenbay(Chuyenbay chuyenbay) {
        return flight_repo.save(chuyenbay);
    }

    public CtHangve createCtHangve(CtHangve cthangve) {
        return cthangve_repo.save(cthangve);
    }

    public TrungGian createTrunggian(TrungGian trunggian) {
        return trunggian_repo.save(trunggian);
    }

    public DSGhe createDSGhe(DSGhe dsghe) {
        return soghe_repo.save(dsghe);
    }
    
    public boolean isFlightExist(String maChuyenbay) {
        List<Chuyenbay> chuyenbay = flight_repo.findByMaChuyenBay(maChuyenbay);
        return !chuyenbay.isEmpty();
    }

    public Iterable<Chuyenbay> getAllChuyenbay() {
        return flight_repo.findAll();
    }

    public Iterable<Maybay> getAllMaybay() {
        return maybay_repo.findAll();
    }

    public Iterable<SanBay> getAllSanbay() {
        return sanbay_repo.findAll();
    }

    public Iterable<DSGhe> getGhe(String maMayBay, String maHangVe) {
        return soghe_repo.findByMaMBAndMaHangVe(maMayBay, maHangVe);
    }

    public boolean isSanBayExist(String maSanbay) {
        List<SanBay> sanbay = sanbay_repo.findByMaSanBay(maSanbay);
        return !sanbay.isEmpty();
    }
}
