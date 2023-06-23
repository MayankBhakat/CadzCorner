

      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-3 w-1/3 mt-5">
          <input
            type="text"
            placeholder="Title"
            value={song.title}
            onChange={(e) => {
              setSong({ ...song, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Artist"
            value={song.artist}
            onChange={(e) => {
              setSong({ ...song, artist: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Album"
            value={song.album}
            onChange={(e) => {
              setSong({ ...song, album: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Year"
            value={song.year}
            onChange={(e) => {
              setSong({ ...song, year: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Duration"
            value={song.duration}
            onChange={(e) => {
              setSong({ ...song, duration: e.target.value });
            }}
          />
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          {song.file && <h1 className="text-gray-500">{song.file.name}</h1>}
          <div className="flex justify-end">
            {songId && songId !== "" ? (
              <button
                className="text-white bg-orange-500 py-2 px-10 w-full"
                onClick={onEdit}
              >
                Update
              </button>
            ) : (
              <button
                className="text-white bg-orange-500 py-2 px-10 w-full"
                onClick={onAdd}
              >
                Add
              </button>
            )}
          </div>
        </div>

        <div>
          <img
            className="h-[500px]"
            src="https://2.bp.blogspot.com/-Nc9YO_-F8yI/TcSIAB-nR-I/AAAAAAAAAGI/hPkuxqkqVcU/s1600/music-clipartMUSIC1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AddEditSong;
