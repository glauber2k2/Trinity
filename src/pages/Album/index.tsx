import fs from 'fs';
import AlbumPaste from '../../components/AlbumPaste';

interface FoldersProps {
  folders: string[];
}

export async function getStaticProps() {
  const publicFolderPath = './public/album'; // Caminho relativo à pasta raiz do seu projeto

  try {
    const folders = fs
      .readdirSync(publicFolderPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    return {
      props: {
        folders,
      },
    };
  } catch (error) {
    console.error('Erro ao listar pastas:', error);
    return {
      props: {
        folders: [],
      },
    };
  }
}

export default function Folders({ folders }: FoldersProps) {
  return (
    <>
      <div>
        {folders.map((folder, index) => (
          <div key={index}>
            <AlbumPaste name={folder} />
          </div>
        ))}
      </div>
    </>
  );
}
