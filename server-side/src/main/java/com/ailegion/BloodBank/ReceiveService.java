package com.ailegion.BloodBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReceiveService {

    @Autowired
    private ReceiveRepository receiveRepository;

    public List<Receive> allRecipients()
    {
        return receiveRepository.findAll();
    }

    public List<Receive> findByPin(String pin){

        return receiveRepository.findByPin(pin);
    }
}
