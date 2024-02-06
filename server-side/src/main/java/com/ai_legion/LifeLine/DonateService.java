package com.ai_legion.LifeLine;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonateService {

    @Autowired
    private DonateRepository donateRepository;
    public List<Donate> allDonors()
    {

        return donateRepository.findAll();
    }

    public List<Donate> findByPin(String pin){

        return donateRepository.findByPin(pin);
    }
}