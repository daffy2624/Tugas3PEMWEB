function submitForm() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  const prodi = document.getElementById("prodi").value;

  const formData = new FormData();
  formData.append('nama', nama);
  formData.append('nim', nim);
  formData.append('jenis_kelamin', jenisKelamin);
  formData.append('prodi', prodi);

  axios.post('ajax.php', formData)
      .then(response => {
          alert(response.data);
      })
      .catch(error => {
          console.error(error);
      });
}
