package com.inventory.designpattern.strategy;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import com.inventory.model.Buyer;
import com.inventory.repository.BuyerRepository;

public class BuyerStrategy implements StrategyAPI {

	private int id;
	private BuyerRepository buyerRepo;
	private Buyer buyer;
		
	public BuyerStrategy(BuyerRepository buyerRepo, Buyer buy) {
		this.buyerRepo = buyerRepo;
		this.buyer = buy;
	}

	public BuyerStrategy(BuyerRepository buyerRepo, int id) {
		this.id = id;
		this.buyerRepo = buyerRepo;
	}

	@Override
	public void add() {
		if(buyerRepo.companyExists(buyer.getCompanyName()))
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Company already exists");
		buyerRepo.save(buyer);
	}

	@Override
	public void update() {
		buyerRepo.update(buyer);
	}

	@Override
	public void delete() {
		Buyer buyer = buyerRepo.getBuyerbyID(id);
		buyerRepo.delete(buyer);
	}

}