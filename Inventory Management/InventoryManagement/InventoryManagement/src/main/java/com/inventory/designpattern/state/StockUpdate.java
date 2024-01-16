package com.inventory.designpattern.state;

import com.inventory.model.Product;
import com.inventory.repository.ProductRepository;

public class StockUpdate extends StateAPI{

	Product product;
	ProductRepository productRepo;
	
	public StockUpdate(Product product, ProductRepository productRepo) {
		this.product = product;
		this.productRepo = productRepo;
	}

	@Override
	public void action(State state, int stock) {
		
		product.setQuantity(stock);
		productRepo.update(product);
	
	}
}