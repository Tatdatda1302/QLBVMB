package com.example.qlbvmb.repository;
import com.example.qlbvmb.model.Maybay;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MayBayRepo extends CrudRepository<Maybay, String>{
    
}
