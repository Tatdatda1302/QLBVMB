package com.example.qlbvmb.repository;
import com.example.qlbvmb.model.DSGhe;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.example.qlbvmb.TableID.GheID;

@Repository
public interface SoGheRepo extends CrudRepository<DSGhe, GheID>{
    List<DSGhe> findByMaMBAndMaHangVe(String maMB, String maHangVe);
}
