<?php 
  class Cliente {
   private $cliente;
    
    public function __construct($cliente) {
      $this->cliente = $cliente 
    } 
    public function getCliente()
    {
      return $this->cliente; 
    }
  }
