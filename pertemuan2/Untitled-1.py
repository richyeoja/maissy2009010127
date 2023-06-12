nama = input('nama karyawan : ')
NIK = input('NIK Karyawan : ')
status = input('status karyawan : ')
gol = input('golongan (A/B/C) : ')
if(status=='staff'):
    gaji=1000000
    if(gol=="A"):
        bonus=200000
    elif(gol=="B"):
        bonus=400000
    elif(gol=="C"):
        bonus=550000
elif(status=='Honor'):
    gaji=750000
    if(gol=="A"):
        bonus=150000
    elif(gol=="B"):
        bonus=275000
    elif(gol=="C"):
        bonus=480000
Gatot = gaji + bonus
print('gaji total = Rp.',Gatot)