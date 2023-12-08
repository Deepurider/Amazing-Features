using MediatR;

namespace Application.Commands.AmazingFeatures
{
    public class CreateAmazingFeatureCommand : IRequest<bool>
    {
        public class Handler : IRequestHandler<CreateAmazingFeatureCommand, bool>
        {
            public Task<bool> Handle(CreateAmazingFeatureCommand request, CancellationToken cancellationToken)
            {
                return Task.FromResult(true);
            }
        }
    }
}
