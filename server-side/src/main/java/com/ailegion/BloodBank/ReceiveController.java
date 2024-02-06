package com.ailegion.BloodBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/receive")
public class ReceiveController {

    @Autowired
    private ReceiveService receiveService;

    @GetMapping
    public ResponseEntity<List<Receive>> getDonors() {
        return new ResponseEntity<List<Receive>>(receiveService.allRecipients(), HttpStatus.OK);
    }


    @GetMapping("/{pin}")
    public ResponseEntity<List<Receive>> getSingleDonors(@PathVariable String pin)
    {
        return new ResponseEntity<List<Receive>>(receiveService.findByPin(pin), HttpStatus.OK);
    }
}
