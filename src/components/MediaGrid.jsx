const MediaGrid = ({ mediaList }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {mediaList.map((media) => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;