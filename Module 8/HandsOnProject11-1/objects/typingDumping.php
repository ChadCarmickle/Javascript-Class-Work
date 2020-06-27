<?php
	class typing{
		var $DB_table = 'typing';
		var $dataMount = 12;
		var $dataInsert = "INSERT INTO typing (ae_name, ae_age, ae_sex, ae_wpm)";
		
		function dataOut(){
			$sqlOut = $this->dataInsert . " VALUES";
			foreach($this->dataString as $row){
				$sqlOut .= $row . ", ";
			}
			$sqlOut = rtrim($sqlOut,', ');
			return $sqlOut . ";";
		}
		
		
		//Kill Table:
		var $killTable = "DROP TABLE IF EXISTS typing;";
		//create table:
		var $createTable = "CREATE TABLE IF NOT EXISTS typing (
  ae_name varchar(50) NOT NULL,
  ae_age int(11) NOT NULL,
  ae_sex varchar(1) NOT NULL,
  ae_wpm int(11) NOT NULL,
  PRIMARY KEY (ae_name)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;";
		
		//Data
		var $dataString = array(
"('Jerry Lewis', 120, 'M', 20)",
"('Regis Philbin', 75, 'M', 44)",
"('Frank Furt', 45, 'M', 87)",
"('Jill Hill', 22, 'F', 72)",
"('Tracy Sax', 27, 'F', 10)",
"('Julie Barker', 35, 'F', 90)",
"('Blake Black', 54, 'M', 30)",
"('Jack Black', 30, 'M', 20)",
"('Martina White', 14, 'F', 114)",
"('Martin White', 41, 'M', 32)",
"('Jason Biggs', 23, 'M', 4)",
"('Colin Smith', 21, 'M', 50)");

	}
?>