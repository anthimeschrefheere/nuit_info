import sys
import re

source = open("Pokedex.txt", "r")
#destination = open("Pok.csv", "w")
dicoPok={}

def traduction(val2):
	if (val2=="Grass"):
		val2="Plante"
	if (val2=="Fire"):
		val2="Feu"
	if (val2=="Water"):
		val2="Eau"
	if (val2=="Bug"):
		val2="Insecte"
	if (val2=="Flying"):
		val2="Vol"
	if (val2=="Electric"):
		val2="Electrique"
	if (val2=="Ground"):
		val2="Sol"
	if (val2=="Fighting"):
		val2="Combat"
	if (val2=="Psychic"):
		val2="Psy"
	if (val2=="Rock"):
		val2="Roche"
	if (val2=="Steel"):
		val2="Acier"
	if (val2=="Ice"):
		val2="Glace"
	if (val2=="Ghost"):
		val2="Spectre"
	return(val2)

def traduction1(val21):
	if (val21=="Grass"):
		val21="Plante"
	if (val21=="Fire"):
		val21="Feu"
	if (val21=="Water"):
		val21="Eau"
	if (val21=="Bug"):
		val21="Insecte"
	if (val21=="Flying"):
		val21="Vol"
	if (val21=="Electric"):
		val21="Electrique"
	if (val21=="Ground"):
		val21="Sol"
	if (val21=="Fighting"):
		val21="Combat"
	if (val21=="Psychic"):
		val21="Psy"
	if (val21=="Rock"):
		val21="Roche"
	if (val21=="Steel"):
		val21="Acier"
	if (val21=="Ice"):
		val21="Glace"
	if (val21=="Ghost"):
		val21="Spectre"
	return (val21)

def traduction1(val22):
	if (val22=="Grass"):
		val22="Plante"
	if (val22=="Fire"):
		val22="Feu"
	if (val22=="Water"):
		val22="Eau"
	if (val22=="Bug"):
		val22="Insecte"
	if (val22=="Flying"):
		val22="Vol"
	if (val22=="Electric"):
		val22="Electrique"
	if (val22=="Ground"):
		val22="Sol"
	if (val22=="Fighting"):
		val22="Combat"
	if (val22=="Psychic"):
		val22="Psy"
	if (val22=="Rock"):
		val22="Roche"
	if (val22=="Steel"):
		val22="Acier"
	if (val22=="Ice"):
		val22="Glace"
	if (val22=="Ghost"):
		val22="Spectre"
	return (val21,val22)

for line_file in source.readlines():
	if re.match(r'\d{3}\ ',line_file):
		tmp=line_file.split(" - ")
		cle=tmp[0]
		cle=cle.strip('\r\n')
		val1= tmp[1]
		val1=val1.strip('\r\n')
	if re.match(r'Type:',line_file):
		tmp=line_file.split(": ")
		val2=tmp[1]
		val2=val2.strip('\r\n')
		if re.match(r'/',val2):
			listType=val2.split('/')
			val21=listType[0]
			val21=val21.strip('\r\n')
			val22=listType[1]
			val22=val22.strip('\r\n')
			if cle<"152":
				val21=traduction(val21)
				val22=traduction(val22)
				dicoPok[cle]=[val1, val21, val22]
		else:	
			if cle<"152":
				val2=traduction(val2)
				dicoPok[cle]=[val1, val2]

print dicoPok
 #    information=line_file.split(":")		
 #    reactionName=information[0]
 #    reaction=information[1].split("=")		
    
 #    reagentList=[]				
 #    productList=[]				
 #    for l in range (0,2,1):			
	# element=reaction[l].split(" +")
	# for j in range(len(element)):
	#     if re.match(r'.*\..*',element[j],re.M|re.I):		
	# 	  tmp=element[j].split('.')
	# 	  element[j]=tmp[0]
	#     if re.match(r'.*\d+\s.*',element[j],re.M|re.I):		
	# 	setMol=element[j].split(' ')
	# 	for k in range(len(se

#if (/d{3} - /w*)