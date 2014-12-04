import re
source = open("Medecin.txt","r")
Medecin = {}

for line_file in source.readlines():
    if re.match("Nom",line_file):
        tmp = line_file.split(": ")
        cle = tmp[1]
        cle = cle.strip('\r\n')
    if re.match("Specialite",line_file):
        tmp = line_file.split(": ")
        val1 = tmp[1]
        val1 = val1.strip('\r\n')
    if re.match("Lieu",line_file):
        tmp = line_file.split(": ")
        val2 = tmp[1]
        val2 = val2.strip('\r\n')
    if re.match(" ",line_file):
          Medecin[cle]=[val1,val2]

print Medecin
