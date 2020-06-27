<?php
	class product{
		var $DB_table = 'product';
		var $dataMount = 16;
		var $dataInsert = "INSERT INTO product (key1, partNum, description, unit, qty, cost, price, onSpecial, warranty, deleted)";
		
		function dataOut(){
			$sqlOut = $this->dataInsert . " VALUES";
			foreach($this->dataString as $row){
				$sqlOut .= $row . ", ";
			}
			$sqlOut = rtrim($sqlOut,', ');
			return $sqlOut . ";";
		}
		
		
		//Kill Table:
		var $killTable = "DROP TABLE IF EXISTS product;";
		//create table:
		var $createTable = "CREATE TABLE IF NOT EXISTS product (
  key1 int(11) NOT NULL AUTO_INCREMENT,
  partNum varchar(10) NOT NULL DEFAULT '',
  description varchar(25) NOT NULL DEFAULT '',
  unit char(2) NOT NULL DEFAULT '',
  qty smallint(6) NOT NULL DEFAULT '0',
  cost float(6,2) NOT NULL DEFAULT '0.00',
  price float(6,2) NOT NULL DEFAULT '0.00',
  onSpecial tinyint(1) NOT NULL DEFAULT '0',
  warranty char(3) NOT NULL,
  deleted tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (key1)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=206 ;";
		
		//Data
		var $dataString = array(
"(7, 'BAS2', 'Ronco Bassmatica Plus', 'EA', 0, 200.00, 300.00, 1, '30', 0)",
"(8, 'BCC500', 'Beano Cheese Cutter', 'BX', 15, 0.02, 65.05, 0, '1Y', 0)",
"(9, 'KH125', 'Hitchen Super Utensils', 'EA', 40, 30.00, 30.00, 0, '30', 0)",
"(10, 'JHN2000', 'White Commercial Toilets', 'BX', 15, 45.00, 100.00, 1, '30', 0)",
"(161, 'ABCD1234', 'Higgs Boson', 'EA', 3, 77.00, 259.95, 1, '30', 0)",
"(159, 'BJS99', 'Bassomatic XLT', 'EA', 100, 3.69, 19.99, 0, '30', 0)",
"(158, 'SRJ4', 'Bassomatic Junior', 'EA', 2, 3.69, 19.95, 0, '30', 0)",
"(153, '906BW', 'HP Monitor XL', '', 0, 110.00, 155.00, 0, '30', 0)",
"(149, 'JJB19', 'Bassomatic XLT', 'EA', 10, 3.69, 19.99, 0, '30', 0)",
"(147, 'WJ78', 'CDX 456', 'EA', 10, 2.09, 15.98, 0, '30', 0)",
"(205, '907BW', 'Samsung SyncMaster', 'EA', 7, 110.00, 155.00, 0, '30', 1)",
"(204, 'AL1916W', 'Acer A7 Monitor', 'EA', 5, 99.00, 160.00, 0, '30', 0)",
"(203, 'W1907', 'HP Monitor XL', 'EA', 6, 149.00, 214.00, 1, '30', 0)",
"(202, 'MV141', 'MegaVision Monitor', 'EA', 5, 111.00, 150.00, 0, '30', 0)",
"(201, '941BW', 'Samsung VersDisplay', 'EA', 5, 132.45, 269.00, 0, '30', 1)",
"(136, 'BEW549', 'Airbag Deflator', 'CT', 5, 1.00, 5.00, 1, '30', 0)");

	}
?>